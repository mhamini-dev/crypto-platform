import { Module } from '@nestjs/common';
import { MarketService } from './market.service';
import { MarketService } from './market.service';

@Module({
  providers: [MarketService],
})
export class MarketModule {}
