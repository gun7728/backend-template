import { INestiaConfig } from '@nestia/sdk';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
// import { FastifyAdapter } from "@nestjs/platform-fastify";

const NESTIA_CONFIG: INestiaConfig = {
  input: async () => {
    const app = await NestFactory.create(AppModule);
    return app;
  },
  output: 'src/api', // sdk의 output의 경로
  distribute: 'packages/api', // 배포할 sdk(즉 js파일)의 output 경로를 지정하면 된다.
  primitive: false, // dto 를 감쌀지 여부
  simulate: false, // api가 mock 데이터를 주는지
  clone: true,
};
export default NESTIA_CONFIG;
