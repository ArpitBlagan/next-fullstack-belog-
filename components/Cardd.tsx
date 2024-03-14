import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
export default function Cardd() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
          className="object-fill"
        />
        <div className="flex flex-col">
          <p className="text-md">NextJS+NextUI+NextAuth</p>
          <p className="text-small text-default-500">By- Arpit Blagan.</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Empower your words, amplify your voice.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
