module.exports = {
    productQueries: {
        getProducts: async (parent, args, {Product}, info) => {
            try {

                const prods = await Product.find();
                console.log(prods);
                return prods;

            } catch(err) {

                throw new ApolloError('Unable to get products.\n', err);

            }
        }
    }
}