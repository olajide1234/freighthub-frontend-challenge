import { action, computed, observable } from 'mobx';

import instance from '../config/axiosSetup';
import { IShipment } from '../interfaces/shipment.interface';

export class ShipmentDetailsStore {
  @observable isLoading = true;

  @observable shipment: IShipment = {
    id: '',
    name: '',
    cargo: [],
    mode: '',
    type: '',
    destination: '',
    origin: '',
    services: [],
    total: '',
    status: '',
    userId: '',
  }

  @observable shipmentName = '';

  @action
  async getShipmentDetails(shipmentId: string) {
    const response = await instance.get(`/shipments/${shipmentId}`);
    this.setShipment(response.data);
    this.setShipmentName(response.data.name);
    this.setLoading(false);
  }

  @action
  setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  @action
  setShipment(shipment: IShipment) {
    this.shipment = shipment;
  }

  @action
  async updateshipmentName(name: string, shipmentId: string) {
    const response = await instance.patch(`/shipments/${shipmentId}`, { name });
    this.setShipmentName(response.data.name);
  }

  @action
  setShipmentName(name: string) {
    this.shipmentName = name;
  }
}

export const shipmentDetailsStore = new ShipmentDetailsStore();
