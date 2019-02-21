age=15
puts age.object_id;
puts age.class;
puts "Value of age is #{age}"
puts 'Value of age is #{age}'

price=11.11
puts price.object_id;
puts price.class;
puts "Value of age is #{price}"

name="Ruby"
puts name.class;
puts "Value of age is #{name}"

array=[15,16.26,'Rails',[1,2]]
puts array.class;
puts "Value of array  is #{array}"
puts "Value of array[0] is #{array[0]}"

Is_admin=true
puts Is_admin.class;

hash={:language=>"Ruby",:framework=>"Rails"}
puts hash.class;
puts "Value of hasg is #{hash}"
puts "Hash keys is #{hash.keys}"
puts "Hash values is #{hash.values}"
puts "Language #{hash[:language]}"
puts "Framework #{hash[:framework]}"