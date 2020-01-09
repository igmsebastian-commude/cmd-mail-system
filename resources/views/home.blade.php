@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Upload CSV</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    @if($errors->any())
                    <div class="alert alert-danger">{{ $errors->messages()['file'][0] }}</div>
                    @endif

                    <form method="POST" action={{ url('/import') }} enctype="multipart/form-data">
                        {{ csrf_field() }}
                        <div class="form-group">
                          <input type="file" class="form-control-file" name="file" id="exampleFormControlFile1" accept=".csv" required>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
