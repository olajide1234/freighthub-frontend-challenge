import { action, computed, observable } from 'mobx';

import instance from '../config/axiosSetup';
import { LIMIT } from '../constants';
import { IShipment } from '../interfaces/index';

export class ShipmentStore {
  @computed get totalNumberOfShipments() {
    return this.shipments.length;
  }

  @observable shipments: IShipment[] = [];

  @observable filteredShipments: IShipment[] = [];

  @observable isLoading = false;

  @observable searchQuery?: string;

  @action
  async getShipments(page = 1, limit: number = LIMIT) {
    this.setLoading(true);
    const response = await instance.get(
      `/shipments?_page=${page}&_limit=${limit}`,
    );

    const mappedShipments = response.data.map((el: IShipment) => ({
      ...el,
      total: Number(el.total),
    }));
    this.setShipments(mappedShipments);
    this.setLoading(false);
  }

  @action
  setShipments(shipments: IShipment[]) {
    this.shipments = shipments;
  }

  @action
  setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  @action
  setFilteredShipments(filteredShipments: IShipment[]) {
    this.filteredShipments = filteredShipments;
  }

  @action
  searchShipments(query: string) {
    this.searchQuery = query;
    const filteredShipments = this.shipments.filter((item) => item.id.toLowerCase().search(query.toLowerCase()) !== -1);

    this.setFilteredShipments(filteredShipments);
  }

  @action
  sortShipments(sortByField: string) {
    const sortedShipments = this.shipments.slice().sort((a, b) => {
      if (a[sortByField] > b[sortByField]) {
        return -1;
      }
      if (a[sortByField] < b[sortByField]) {
        return 1;
      }
      return 0;
    });

    this.setShipments(sortedShipments);
  }
}

export const shipmentStore = new ShipmentStore();
