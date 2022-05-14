const Sequelize = require('sequelize')
const config = require('config')

const instancia = new Sequelize(
    
    config.get('mssql.banco-de-dados'),
    config.get('mssql.usuario'),
    config.get('mssql.senha'),
    {
        
        host: config.get('mssql.host'),
        dialect: 'mssql',
    }
)

module.exports = instancia