import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  
  export function DeleteBtn() {
    return (
        <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="px-6 py-3 text-lg font-medium text-red-600 bg-white rounded-md hover:bg-zinc-400 hover:text-red-700 transition duration-300">
            Delete
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-800 " >Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              article and remove its content from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="px-6 py-3 text-lg font-medium text-red-600 bg-white rounded-md hover:bg-zinc-400 hover:text-red-700 transition duration-300">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-zinc-400 hover:text-white transition duration-300">
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  export default DeleteBtn;
  