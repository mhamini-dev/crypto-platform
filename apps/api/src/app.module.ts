import { Module, OnModuleInit } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { CryptoGateway } from './gateway/gateway.gateway';
import { MarketService } from './market/market.service';
import { MarketModule } from './modules/market/market.module';

@Module({
  providers: [CryptoGateway, MarketService],
  imports: [EventEmitterModule.forRoot(), MarketModule],
})
export class AppModule implements OnModuleInit {
  constructor(private market: MarketService) {}

  onModuleInit() {
    this.market.startPriceStream();
  }
}
