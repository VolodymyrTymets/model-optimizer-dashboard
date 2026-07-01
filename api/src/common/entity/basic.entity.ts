import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BasicEntity {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field(() => Date, { nullable: true, description: 'createdAt' })
  createdAt: Date;
}
