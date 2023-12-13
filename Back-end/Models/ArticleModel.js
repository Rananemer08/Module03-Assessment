import Sequelize from 'sequelize';
import db from '../Config/connection.js';


const ArticleModel =  db.define("articles",{
    
    
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    
    body:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    author:{
        type:Sequelize.STRING,
        allowNull:false
    },

}
);

export default ArticleModel