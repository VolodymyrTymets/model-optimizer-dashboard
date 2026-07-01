import { GraphQLResolveInfo } from 'graphql/type';
import { PrismaIncludeFromQueryFields } from './prismaIncludeFromQueryFields';

import { PrismaService } from '../prisma/prisma.service';

export class PaginationService {
  constructor(protected prismaService: PrismaService) {}

  findAll<T>(collection: string, findManyArgs: T, info?: GraphQLResolveInfo) {
    const { include = {} } = info ? new PrismaIncludeFromQueryFields(info) : {};
    return this.prismaService[collection].findMany({
      ...findManyArgs,
      ...(include.select && { select: include.collection.select }),
    });
  }

  count<T>(
    collection: string,
    findManyArgs: T,
    info?: GraphQLResolveInfo,
  ): Promise<number> {
    const { include = {} } = info ? new PrismaIncludeFromQueryFields(info) : {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { take, skip, ...findCountArgs } = findManyArgs || {};
    return include.total
      ? this.prismaService[collection].count(findCountArgs)
      : new Promise((resolve) => resolve(0));
  }
  async findAllPaginated<T, O>(
    collection: string,
    findArgs: T,
    info?: GraphQLResolveInfo,
  ): Promise<{ collection: O[]; total: number }> {
    return {
      collection: await this.findAll<T>(collection, findArgs, info),
      total: await this.count<T>(collection, findArgs, info),
    };
  }
}
