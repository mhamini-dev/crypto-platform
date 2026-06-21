import { Injectable } from '@nestjs/common';
import { CryptoGateway } from '../gateway/gateway.gateway';

@Injectable()
export class MarketService {
  constructor(private gateway: CryptoGateway) {}

  startPriceStream() {
    setInterval(() => {
      const price = 60000 + Math.random() * 5000;

      this.gateway.sendPrice('BTC', price);
    }, 3000);
  }
}
