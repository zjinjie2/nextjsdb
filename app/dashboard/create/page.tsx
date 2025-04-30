import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import HandleSubmission from "@/app/actions";
import Submitbutton from "@/components/general/Submitbutton";

const page = () => {
  return (
    <div>
      <h1>hello create page</h1>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Create a post to share with the world</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={HandleSubmission}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="terms">Title</Label>
              <Input name="title" required type="text" placeholder="Title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="terms">Content</Label>
              <Textarea name="content" required placeholder="Content" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="terms">Image URL</Label>
              <Input name="url" required type="url" placeholder="Image URL" />
            </div>

            {/* <Button>Create Post</Button> */}
            <Submitbutton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
