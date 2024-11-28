import mongoose,{Schema,Document} from "mongoose";

export interface IQuiz extends Document {
    _id: string,
    InstructorName: string;
    subject:string
    description:string;

}

const quizSchema=new Schema<IQuiz>({
    _id: {type:String,required:true},
    InstructorName: {type:String,required:true},
    subject: {type:String,required:true,unique:true},
    description: {type:String,required:true}
})

const quizModel=mongoose.model<IQuiz>('Quiz',quizSchema)
export default quizModel