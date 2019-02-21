#find no of student,avg,percentage. Display name ,avg, percentage using class
class Student 
    @@no_of_students=0
    attr_accessor :name, :age, :mark1 , :mark2 ,:mark3 ,:total, :average ,:sum,:percent
    # all variables which is used in all methods



    def initialize
        @@no_of_students +=1
    end

    def user_input
        puts "Enter Name"
        @name=gets.chomp
        puts "Enter Age"
        @age=gets.chomp
        puts "Enter Marks 1"
        @mark1=gets.chomp
        puts "Enter Marks 2"
        @mark2=gets.chomp
        puts "Enter Marks 3"
        @mark3=gets.chomp

        #or 
        # puts "Enter marks separated by ,"
        # marks= gets.compt.split(",").map{|num|num.to_i}
       
        puts "Total marks"
        @total=gets.chomp.to_i

    end
    def average
        @sum=mark1.to_i+mark2.to_i+mark3.to_i
        @average=sum/3

        #marks.inject(:+)/(marks.length)
    end
    #instance method
    def percentage
        @percent=(sum/total.to_f)*100

    end

    def display_info
        puts "Name is #{name}"
        puts "Age is #{age}"
        puts "Average is #{average}"
        puts "Percent is #{percent}"
        puts "No of studemts is #{@@no_of_students}"
    end

    #class method
    def self.get_no_of_students
        puts "No of students is #{no_of_students}"
    end

end

#we can use this method instead of both below method

    # def name
    #     @name=name
    # end

    # def name(other_name)
    #     Aname=other_name
    # end

student=Student.new
student.user_input
student.average
student.percentage
student.display_info