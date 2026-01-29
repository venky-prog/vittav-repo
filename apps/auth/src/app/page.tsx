import {Button} from '@vittav/core-ui';
import {Demo} from '@/components/demo';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="py-12">
      <Button>Click me</Button>
      <Demo />
    </div>
  );
}
