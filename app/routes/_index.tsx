import type { LoaderFunction } from '@remix-run/node';
import { defer } from '@remix-run/node';
import { Await, useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';

function getComments(): Promise<string[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(['This is Great.', 'Worthy of recommendation!']);
    }, 3000)
  );
}

export const loader: LoaderFunction = async () => {
  const comments = getComments();

  return defer({
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
            <Suspense fallback={<div>Loading...</div>}>
              <Await<string[]> resolve={comments}>
                {(comments) => {
                  return comments.map((comment) => {
                    return <p key={comment}>{comment}</p>;
                  });
                }}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
