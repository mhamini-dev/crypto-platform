import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnEvent } from '@nestjs/event-emitter';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class CryptoGateway {
  @WebSocketServer()
  server: Server;

  @OnEvent('price.update')
  handlePriceUpdate(payload: any) {
    this.server.emit('price:update', payload);
  }
}