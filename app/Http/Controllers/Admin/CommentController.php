<?php

namespace App\Http\Controllers\Admin;

use App\Comment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function update(Request $request, Comment $comment)
    {
        $comment->approved = true;
        $comment->save();

        return redirect()->route("posts.show", $comment->post_id . '#comments');
    }

    public function destroy(Comment $comment)
    {
        $post_id = $comment->post_id;
        $comment->delete();

        return redirect()->route("posts.show", $post_id . '#comments');
    }
}
