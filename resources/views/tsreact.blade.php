@extends('layouts.app')

@section('content')
<!-- 
{{$user['name']}}
-->
    <div id="board"></div>
    <div id="root" data-entityId="{{$user['name']}}"></div>
    <script src="{{asset('js/app.js')}}"></script>
@endsection
