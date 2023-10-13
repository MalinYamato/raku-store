import { defineStore } from "pinia";
import { State } from '@/components/types'

export const useMainStore = defineStore("main", {
  state: (): State => ({
    productInfo: {},
    cartItems: [],
    items: [
      {
        id: 0,
        img: "raku_metal.svg",
        title: "Clear",
        price: 200,
        impedance: 60,
        sensitivity: "101dB/mW",
        color: "green",
        type: "Open",
        description: "Clear is a phone that has great clearity and mindrage, excelletn for volals, jass and classic. The material all metal and wood. This is an open desing of a modified enhanced driver wwith a very \
        clear sound perfect for jazz and classics. The pads are shallow to improve the perception of bass of a driver that focus more on clarity than bass.", 
      },
      {
        id: 1,
        img: "raku_metal.svg",
        title: "Stage",
        price: 160,
        impedance: 32,
        sensitivity: "114dB/mW",
        color: "green",
        type: "Open",
        description: "Stage has better sound-stage and base. The material all metal and wood. This is an open desing of a modified enhanced driver wwith funny bass\
        The pads are thick to improve the perception of sundstage from a driver that is bass oriented. Longer distance between ears and the driver reduces the bass somehwat but improves \
        soundstage and instrument separation. As said the driverf is good att bass so little reduction in bass to gain soundstage will imrove overall experince.",
      },
      {
        id: 2,
        img: "raku_light.svg",
        title: "Clear Light",
        price: 100,
        impedance: 60,
        sensitivity: "101dB/mW",
        color: "black and silver",
        type: "Open",
        description: "Clear Light is opmtimized for clearity and mindrage with pads that enhances bass. The material is plastic with a metal headband. This is an open desing of a modified enhanced driver wwith a very \
        clear sound perfect for jazz and classics. The driver is modified/tuned, made more open, to enhance bass of a driver that is inherrently little bass shy. The pads are shallow to improve the perception of bass \
        of a driver tht focus more on clarity than bass.",
      },
      {
        id: 3,
        img: "raku_light.svg",
        title: "Stage Light",
        price: 60,
        impedance: 32,
        sensitivity: "114dB/mW",
        color: "black",
        type: "Open",
        description: "Stage Light is optimized for sound stage and has more bass. The material is mostly plastic with headband in metal and som wodden parts. This is an open desing of \
        a modified enhanced driver with more bass than Raku clear. The pads adds sondstage with sligt reeduction in bass, still it has plent of bass. " 
      },
    ],
  }),
  getters: {
    // Cart Component
    itemsNumber: ({ cartItems }): number => cartItems.length,
    totalPrice: ({ cartItems }): number | undefined => {
      if (cartItems.length !== 1) {
        const sum = cartItems?.reduce((acc: number, obj: any) => {
          let result = acc + obj.price
          return result
        },0);
        return sum;
      }
      return cartItems[0].price;
    },
  },
  actions: {
    // Cart Component
    inCart(n: object) {
      return this.cartItems.push(n);
    },
    outCart(n: number) {
      let index = this.cartItems.findIndex((x) => x.id === n);
      return this.cartItems.splice(index, 1);
    },
    // Info Component
    addtoInfo(n: number) {
      const selectedProduct = this.items.find((item) => item.id === n);
      this.productInfo = selectedProduct! ;
    },
  },
});
