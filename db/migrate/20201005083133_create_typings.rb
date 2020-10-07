class CreateTypings < ActiveRecord::Migration[6.0]
  def change
    create_table :typings do |t|
      t.string    :nickname
      t.float     :second
      t.timestamps
    end
  end
end
