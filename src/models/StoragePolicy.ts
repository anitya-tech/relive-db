import mg from "mongoose";

export type StoragePolicyType = "minio" | "aliyun_oss" | "baidu_wangpan";

export interface StoragePolicy {
  type: StoragePolicyType;
  online: boolean;
  friendlyName: string;
  secret?: string;
  config: Map<string, unknown>;
}

const schema = new mg.Schema<StoragePolicy>(
  {
    type: {
      type: String,
      required: true,
      enum: ["minio", "aliyun_oss", "baidu_wangpan"],
    },
    online: {
      type: Boolean,
      required: true,
    },
    friendlyName: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    secret: {
      type: String,
      required: false,
    },
    config: {
      type: mg.Schema.Types.Map,
      required: false,
    },
  },
  { timestamps: true }
);

export const create = (conn: mg.Connection) =>
  conn.model<StoragePolicy>("StoragePolicy", schema, "StoragePolicy");
