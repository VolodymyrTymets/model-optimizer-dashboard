import { GraphQLResolveInfo } from 'graphql/type';

interface SelectInclude {
  select?: Include;
  include?: Include;
}

type Include = Record<string, boolean | SelectInclude>;

export class PrismaIncludeFromQueryFields<T = any> {
  private info: GraphQLResolveInfo;
  public include: T;
  private excludeFields: string[] = [];
  private readonly fragments: Record<string, Include>;

  constructor(
    info: GraphQLResolveInfo,
    params: { excludeFields?: string[] } = {},
  ) {
    this.excludeFields = params.excludeFields || ['__typename'];
    this.info = info;
    this.fragments = this.getFragments();
    this.include = this.transformPrismaIncludeFromQuery(info);
  }

  private getFragments() {
    return Object.entries(this.info.fragments).reduce<Record<string, Include>>(
      (acc, [fragmentName, fragmentData]) => {
        acc[fragmentName] = this.transformSelections(
          fragmentData.selectionSet.selections,
        );
        return acc;
      },
      {},
    );
  }

  private getFragmentNameToTypeMap() {
    return Object.keys(this.fragments).reduce((acc, fragmentName) => {
      acc[fragmentName] =
        this.info.fragments[fragmentName].typeCondition.name.value;
      return acc;
    }, {});
  }

  private selectOrInclude(selections = {}) {
    const values = Object.values(selections);
    if (!values.length) {
      return true;
    }
    return values.some((v) => typeof v === 'boolean')
      ? { select: selections }
      : { include: selections };
  }

  private transformSelections(selections, parent?: string) {
    return (
      selections?.reduce((acc, selection) => {
        const { name, selectionSet } = selection;
        const { value } = name;
        const { selections } = selectionSet || {};
        if (selection.kind === 'Field') {
          if (this.excludeFields.includes(value)) {
            return acc || {};
          }

          acc[value] = this.selectOrInclude(
            this.transformSelections(selections, value),
          );
        } else if (selection.kind === 'FragmentSpread') {
          const fragmentSpreadFields = this.transformSelections(
            this.info.fragments[value].selectionSet.selections,
          );
          if (fragmentSpreadFields) {
            acc = { ...acc, ...fragmentSpreadFields };
          }
        }
        return acc;
      }, {}) || {}
    );
  }

  private transformPrismaIncludeFromQuery(info: GraphQLResolveInfo) {
    return this.transformSelections(
      info?.fieldNodes[0]?.selectionSet?.selections,
    );
  }
}
