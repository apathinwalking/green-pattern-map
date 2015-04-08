var mongo = require('mongodb');
var utils = require('./utils.js');

var Api = function(config){
    for(var prop in config){
        this[prop] = config[prop];
    }
    this.utils = new utils(this);
};



Api.prototype.filter = function(req,res,cb){
    var me = this;
    this.utils.query(res, 'sites', req.query, 'json', cb);
};

Api.prototype.unique_sites = function(req,res,cb){
    this.utils.query(res, 'sites', {}, 'geojson', cb);
};

Api.prototype.unique_neighborhoods = function(req, res, cb) {
    this.utils.query(res, 'neighborhoods', {}, 'geojson', cb);
};

Api.prototype.geom_neighborhoods = function(req,res,cb){
    this.utils.unique(res, 'neighborhoods', 'properties.Name', {}, 'json', cb, false);
};

Api.prototype.unique_csas = function(req, res, cb) {
    this.utils.unique(res, 'csas', 'properties.name', {}, 'json', cb, false);
};

Api.prototype.geom_csas = function(req,res,cb){
    this.utils.query(res, 'csas', {}, 'geojson', cb);
};

Api.prototype.sites_in_circle = function(req,res,cb){
    this.utils.in_circle(req.query.center,req.query.km,cb);
};

module.exports = Api;