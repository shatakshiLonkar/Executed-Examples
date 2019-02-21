class Bar
    def initialize(*args)
        @args=args
        if args=args
            if args.size==3
                foo
            else
                calculate
            end
        end
        def foo 
            @total=@args.inject(:+)
        end
        def calculate
            total=0
            @args.each{|el|total+=el if el % 2==0}
            @total=total
        end
        def total
            @total
        end
    end
end