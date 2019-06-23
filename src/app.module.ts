import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';

const graphQlImports = [
  //Your resolvers here
]

@Module({
  imports: [
    ...graphQlImports,
    GraphQLModule.forRoot({
      autoSchemaFile:"schema.gql",
      playground:true
    })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
