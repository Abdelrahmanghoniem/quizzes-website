import mongoose,{Schema,Document} from "mongoose";

export interface IQuiz extends Document {
    firstName: string;
    lastName: string;
    subject:string
    description:string;

}

const quizSchema=new Schema<IQuiz>({
    firstName: {type:String,required:true},
    lastName: {type:String,required:true},
    subject: {type:String,required:true,unique:true},
    description: {type:String,required:true}
})

const quizModel=mongoose.model<IQuiz>('Quiz',quizSchema)
export default quizModel