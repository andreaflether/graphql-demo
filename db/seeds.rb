10.times do
  name = Faker::Name.name

  user = User.create(
    email: Faker::Internet.email(name: name),
    username: Faker::Internet.username(specifier: name, separators: %w(. _ -)),
    name: name
  )

  rand(1..5).times do
    user.posts.create(
      title: Faker::Lorem.sentence,
      body: Faker::Lorem.paragraph
    )
  end
end