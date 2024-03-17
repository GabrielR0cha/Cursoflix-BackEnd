import adminJs,{  PageHandler } from "adminjs"
import { Category, Course, Episode, User } from "../models"




export const ddashboardOption: {
  handler?: PageHandler,
  component?:string
} = {
  component:adminJs.bundle("./components/Dashboard"),
  handler: async (req,res,context) => {
    const courses = await Course.count()
    const episode = await Episode.count()
    const category = await Category.count()
    const standartUsers = await User.count({where:{role:'user'}})

    res.json({
      'Cursos': courses,
      'Episódios': episode,
      'Categorias': category,
      'Usuários': standartUsers
    })
  }
}