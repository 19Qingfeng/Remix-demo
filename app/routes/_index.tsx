import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = () => {
  return json({
    name: '19Qingfeng',
  });
};

export default function Index() {
  const { name } = useLoaderData();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h3>Hello {name}!</h3>
    </div>
  );
}
