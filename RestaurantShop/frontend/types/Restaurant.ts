export interface Restaurant {
  attributes: {
    name: string;
    description: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
