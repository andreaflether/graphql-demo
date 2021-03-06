module Types
  class QueryType < Types::BaseObject
    # /users
    field :users, [UserType], null: false

    def users
      User.all
    end

    field :user, UserType, null: false do
      argument :id, ID, required: true
    end

    def user(id:)
      User.find(id)
    end
  end
end
