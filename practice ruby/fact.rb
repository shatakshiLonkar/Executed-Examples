puts "Enter Number"
no=gets.chomp.to_i
fact=1
(1..no).each do |i| 
    fact=fact * i;
end
puts "factorial of ",no,"is",fact
