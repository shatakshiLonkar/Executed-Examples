# *
# **
# ***
# ****
# *****

1.upto(5) do |i|
    puts "*"*i
end

# nos from 1 to 100 and divisible by 3 and 5
arr =(1..100).to_a.select do |i|
    i % 3 == 0 && i% 5==0
end
puts "value #{arr}"
#.............................................................

#palindrome and its max
(11..99).each do |i|
    (11..99).each do |j|
        product=(i*j).to_s
        if product==product.reverse
            arr.push(i*j)
        end
    end
end

puts arr
puts "Max value is #{arr.max}"

#--------------------------------------------------------------------
# sum of squares of first ten nos

puts "Collects"

arr=(1..10).to_a.collect do |i| 
  (i*i)
end
puts arr1=arr.inject(:+)

puts arr2=(1..10).inject(:+) **2
puts (((1..10).inject(:+)) **2)- ((1..10).collect{|i| i *i}.inject(:+))
