import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

function getComments(): Promise<string[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(['This is Great.', 'Worthy of recommendation!']);
    }, 3000)
  );
}

export const loader: LoaderFunction = async () => {
  const comments = await getComments();

  return json({
    comments,
  });
};

export default function Index() {
  const { comments } = useLoaderData<{ comments: string[] }>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <div>
        <div>商品</div>
        <p>价格</p>
        <div>
          <div>
            <p>评论</p>
            {comments.map((comment) => {
              return <p key={comment}>{comment}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
