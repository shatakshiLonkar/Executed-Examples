module Commentable
    def comment
        'I love Comments!'
    end
end

class Post
    extend Commentable
end

Post.comment
puts Post.singleton_class.ancestors