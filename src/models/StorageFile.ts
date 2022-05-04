import mg from "mongoose";

export interface StorageFile {
  storagePolicy: string;
  key: string;
  size: number;
  hash: string;
  remarks: Map<string, unknown>;
}

const schema = new mg.Schema<StorageFile>(
  {
    storagePolicy: {
      type: mg.Schema.Types.ObjectId,
      ref: "StoragePolicy",
      required: true,
    },
    key: {
      type: String,
      index: true,
    },
    size: {
      type: Number,
    },
    hash: {
      type: String,
      index: true,
    },
    remarks: {
      type: mg.Schema.Types.Map,
      required: false,
    },
  },
  { timestamps: true }
);

export const create = (conn: mg.Connection) =>
  conn.model<StorageFile>("StorageFile", schema, "StorageFile");
