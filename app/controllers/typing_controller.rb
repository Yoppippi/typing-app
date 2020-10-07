class TypingController < ApplicationController

  def top
  end

  def normal
    @typing = Typing.new
  end

  def secret
  end

  def ranking
    @typing = Typing.order(:second)
  end

  def create
    Typing.create(typing_params)
    redirect_to typing_ranking_path
  end

  private
  def typing_params
    params.permit(:nickname, :second)
  end
end
