# declaring range converting to array

puts "with Each loop"
(1..10).to_a.each do |i| 
    puts "value #{i}"
end

puts "Each with index"
(1..10).to_a.each_with_index do |i,index| 
    puts "value #{i} and index is #{index}"
end

puts "Select"
arr=(1..10).to_a.select do |i| 
   i % 2 == 0
end
puts arr

puts "Rejects"
arr=(1..10).to_a.reject do |i| 
   i % 2 == 0
end
puts arr


puts "HI"*3

1.upto(5) do |i|
    puts i
end

5.downto(1) do |i|
    puts i
end

puts "Collects"
arr=(1..10).to_a.collect do |i| 
   i * 2 
end
puts arr


puts "Maps"
arr=(1..10).to_a.collect do |i| 
   i * 2 
end
puts arr


puts "Each"
arr=[]
(1..10).to_a.each do |i| 
   i * 2 
   arr.push(i*2)
end
puts "Each value #{arr}"

puts "Addtion of 1 to 10 is #{(1..10.inject(:+))}"
# or

puts (1..10).inject(0) do |sum,i|
sum+=i
end

