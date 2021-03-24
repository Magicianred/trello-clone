import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { CardTrello } from './entity/card.entity';

@Module({
  controllers: [CardController],
  providers: [CardService],
  imports: [TypeOrmModule.forFeature([CardTrello])],
  exports: [CardService]
})
export class CardModule {}
