import Link from "next/link";
import Image from "next/image";

interface IappProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const BlogpostCard = ({ data }: IappProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* {data.imageUrl ? (
            <Image src={data.imageUrl} alt={data.title} fill />
          ) : (
            <div className="bg-gray-100 w-full h-full flex items-center justify-center text-sm text-gray-500">
              No image available
            </div>
          )} */}
        </div>

        <div className=" p-4">
          <h3 className="text-lg font-semibold text-gray-900">{data.title}</h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">{data.content}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image src={data.authorImage} alt={data.authorName} fill className="object-cover" />
              </div>
              <p className="text-sm font-medium text-gray-700">{data.authorName}</p>
            </div>{" "}
            <time>
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(new Date(data.createdAt))}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogpostCard;
