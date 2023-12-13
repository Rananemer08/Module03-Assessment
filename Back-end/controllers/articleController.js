import ArticleModel from '../Models/ArticleModel.js';


export async function getAll(req, res) {
    try{
    let getdata = await ArticleModel.findAll();

    if(getdata){
            res.json({
                success: true,
                message:"Data Fetch Successfully",
                data:getdata
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message:`Something went wrong, ${err.message}`,
            data: null
        })
    }
}

export async function getById(req, res) {
    try{
        let {id} = req.params;

        let getdata = await ArticleModel.findByPk(id);
        if(getdata){
                res.json({
                    success: true,
                    message:"Data Fetch Successfully",
                    data:getdata
                });
            }
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message:`Something went wrong, ${err.message}`,
            data: null
        })
    }
}

export async function create(req, res) {
    try{
        let getdata = await ArticleModel.create(req.body);
        if(getdata){
                res.json({
                    success: true,
                    message:"Data Fetch Successfully",
                    data:getdata
                });
            }
    }catch(err){
        res.status(500).json({
            success: false,
            message:`Something went wrong, ${err.message}`,
            data: null
        })
    }
}

export async function deleteData(req, res) {
    try{
        let {id} = req.params;
        let getdata = await ArticleModel.destroy({where:{id:id}});
        if(getdata){
                res.json({
                    success: true,
                    message:"Data Fetch Successfully",
                    data:getdata
                });
            }
    }catch(err){
        res.status(500).json({
            success: false,
            message:`Something went wrong, ${err.message}`,
            data: null
        })
    }

}

export async function update(req, res) {
    try{
        let getdata = await ArticleModel.update(req.body, { 
            where:{
                id: req.params.id
            },
            returning: true,
            plain: true
        });


        if(getdata){
                res.json({
                    success: true,
                    message:"Data Fetch Successfully",
                    data:getdata
                });
            }
        }
        catch(err){
            res.status(500).json({
                success: false,
                message:`Something went wrong, ${err.message}`,
                data: null
            })
        }
    }
