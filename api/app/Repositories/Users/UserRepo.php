<?php

namespace App\Repositories\Users;

use App\Models\Users\User;

class UserRepo {

    public static function find($id){
        return User::find($id)->load('lista');
    }

    public static function findByEmail($email){
        return User::where('email',$email)->first()->load('lista');
    }

    public static function all(){
        return User::orderBy('nombre','ASC')->get()->load('lista');
    }

    public static function insert($data){
        $user = User::create($data);
        return self::find($user->id);
    }

    public static function update($id, $data){
        $user = self::find($id);
        $user->update($data);
        return self::find($user->id);
    }

    public static function delete($email){
        $user = self::findByEmail($email);
        $user->delete();
        return $user;
    }
}
