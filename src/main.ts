import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Picture Drop API')
    .setDescription('Backend für Picture Drop')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document)

  app.use('/api/json', (req, res) => {
    res.json(document)
  })

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
