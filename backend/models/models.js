const bookshelf = require('./bookshelf')

const City = bookshelf.Model.extend({
    tableName: 'cities',
    productCategories: function () {
        return this.belongsToMany(ProductCategory)
    },
    recyclingPlaces: function() {
        return this.hasMany(RecyclingPlace)
    }
})

const ProductCategory = bookshelf.Model.extend({
    tableName: 'productcategories',
    cities: function() {
        return this.belongsToMany(City)
    },
    products: function() {
        return this.hasMany(Product)
    },
    depotLocations: function () {
        return this.belongsToMany(DepotLocation)
    }
})

const Product = bookshelf.Model.extend({
    tableName: 'products',
    productCategory: function () {
        return this.belongsTo(ProductCategory)
    },
    recyclingPlaces: function() {
        return this.belongsToMany(RecyclingPlace)
    }
})

const DepotLocation = bookshelf.Model.extend({
    tableName: 'depotlocations',
    productCategories: function() {
        return this.belongstoMany(ProductCategory)
    }
})

const RecyclingPlace = bookshelf.Model.extend({
    tableName:'recyclingplaces',
    products: function(){
        return this.belongstoMany(Product)
    },
    city: function () {
        return this.belongsTo(City)
    }

})

module.exports = City, ProductCategory, Product, DepotLocation, RecyclingPlace