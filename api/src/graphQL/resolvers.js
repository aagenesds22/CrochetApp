const { ApolloError } = require("apollo-server-errors");


module.exports = {

    Query: {
        getProducts: async (parent, args, {Product}, info) => {
            try {

                const prods = await Product.find();
                console.log(prods);
                return prods;

            } catch(err) {

                throw new ApolloError('Unable to get products.\n', err);

            }
        }
    },
    Mutation: {
        addProduct: async(parent, {product}, {Product}, info) => {
            try {

                const fields = {};
                for(let field in product) {
                    
                    fields[field] = product[field];
                }

                console.log(fields);
                
                const newProd = await Product.create({
                    ...fields
                });

                return newProd;

            } catch (error) {
                
                throw new ApolloError('Unable to create product\n',error);

            }
        },
        updateProduct: async(parent, {products}, {Product},info) => {
            let productUpdate, productsToUpdate = [], objectParsed;
            try {
                let currentInnerVal, currentInnerField;
                    /* 

                    {
                        ids: [id1, id2, id3, id4]
                        fields: [[['name'], ['description']], ['price']];
                        values: [[['blusa'], ['color azul']], ['172']];
                    }s
                    */
                   
                for(let i = 0; i < products['ids'].length; i++) {
                    console.log(`\n\n\n sf`, products['ids'][i]);
                    objectParsed = {};

                    for(let j = 0; j < products['fields'][i].length; j++) {
                        
                        currentInnerField = products['fields'][i][j];
                        currentInnerVal = products['values'][i][j][0];
                        
                        objectParsed[currentInnerField] = currentInnerField === 'price' ? parseInt(currentInnerVal) : currentInnerVal;
                        
                        

                }
                    productUpdate = await Product.findOneAndUpdate({_id: products['ids'][i]}, objectParsed);
                    productsToUpdate = [...productsToUpdate, productUpdate];
                    console.log(productsToUpdate);
                }
                
                
            
            return productsToUpdate;
                
            } catch (error) {

                throw new ApolloError('Unable to update product\n', error);

            }
        }
    }
}