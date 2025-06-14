import mongoose from "mongoose";

export const VIDEO_DIMENSION = {
  width : 1080,
  height : 1920
} as const;


export interface IVideo {
    _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    userId: mongoose.Types.ObjectId;
    createdAt?: Date;
    transformation:{
    height: number;
    width: number;
    quality: number;
    }

}

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    transformation: {
        height: { type: Number, default: VIDEO_DIMENSION.height },
        width: { type: Number, default: VIDEO_DIMENSION.width },
        quality: { type: Number, default: 100 }
        }},
        {
            timestamps: true
        }


)