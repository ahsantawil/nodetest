import {getAllProducts} from '../src/database';
import {ProductService} from '../src/product-service';


jest.mock('../src/database.js', () => {
    const originalModule = jest.requireActual('../src/database.js');

    return{
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn()
    };
});

test('mock modules getAllProducts', () => { 
    const products = [
        {id: 1, name: 'Product Mock 1'},
        {id: 2, name: 'Product Mock 2'}
    ]
    getAllProducts.mockReturnValue(products);

    expect(ProductService.findAll()).toEqual(products);
 });

 test.failing('mock modules getProductById', () => { 
    ProductService.findAll(1);
  });