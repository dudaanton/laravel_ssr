@extends('layouts.app')

@section('scripts')
    <script src="{{ mix('js/users_client.js') }}" defer></script>
@show

@section('content')
<div id="app">{{!! $html !!}}</div>
@endsection
