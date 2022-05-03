import mg from "mongoose";

export interface ReliveUser {
  nickname: string;
  bilibiliUid: number;
  bilibiliRoomId: number;
}

const schema = new mg.Schema<ReliveUser>(
  {
    nickname: {
      type: String,
    },
    bilibiliUid: {
      type: Number,
      index: true,
      unique: true,
    },
    bilibiliRoomId: {
      type: Number,
      index: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const create = (conn: mg.Connection) =>
  conn.model<ReliveUser>("ReliveUser", schema, "ReliveUser");
