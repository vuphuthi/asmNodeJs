import Product from "../models/product"
import joi from "joi";

const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
})
export const create = async (req,res) =>{
    try {
        const { error } = productSchema.validate(req.body);
        if(error){
            res.json({
                message: error.details[0].message
            })
        }
        const product = await Product.create(req.body);
        return res.status(200).json({
        message: "thêm sản phẩm thành công",product
    })
    } catch (error) {
        return res.status(400).json({
            message: "thêm thất bại",error
        })
    }
}
export const getAll = async (req,res) =>{
    try {
        const product = await Product.find();
        return res.status(200).json({
        message: "Danh sách sản phẩm",product
    })
    } catch (error) {
        return res.status(400).json({
            message: "k có dữ liệu",error
        })
    }
}
export const get = async (req,res) =>{
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json({
        message: "Danh sách sản phẩm",product
    })
    } catch (error) {
        return res.status(400).json({
            message: "k có dữ liệu",error
        })
    }
}
export const remove = async (req,res) =>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
        message: "Xóa sản phẩm thành công",product
    })
    } catch (error) {
        return res.status(400).json({
            message: "lỗi",error
        })
    }
}
export const update = async (req,res) =>{
    try {
        const { error } = productSchema.validate(req.body);
        if(error){
            res.json({
                message: error.details[0].message
            })
        }
        const product = await Product.findByIdAndUpdate({_id: req.params.id},req.body,{new:true});
        return res.status(200).json({
        message: "cập nhật sản phẩm thành công",product
    })
    } catch (error) {
        return res.status(400).json({
            message: "cập nhật thất bại",error
        })
    }
}